import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  Upload,
} from "lucide-react";

const StressDetection = () => {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [cameraMode, setCameraMode] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraMode(true);
      }
    } catch (error) {
      alert("Unable to access camera. Please check permissions.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setCameraMode(false);
    }
  }, []);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0);
        const imageDataUrl = canvas.toDataURL("image/jpeg");
        setImage(imageDataUrl);
        stopCamera();
        alert("Successfully captured your photo for analysis.");
      }
    }
  }, [stopCamera]);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        alert("Successfully uploaded your image for analysis.");
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setImage(null);
    setAnalysisProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const analyzeImage = async () => {
    if (!image) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    const progressInterval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    setTimeout(() => {
      setIsAnalyzing(false);

      const mockResults = {
        stressLevel: Math.random() * 5,
        primaryEmotion: [
          "Happy",
          "Sad",
          "Angry",
          "Fearful",
          "Surprised",
          "Disgusted",
          "Neutral",
        ][Math.floor(Math.random() * 7)],
        confidence: 0.85 + Math.random() * 0.14,
        emotions: {
          happy: Math.random() * 100,
          sad: Math.random() * 100,
          angry: Math.random() * 100,
          fearful: Math.random() * 100,
          surprised: Math.random() * 100,
          disgusted: Math.random() * 100,
          neutral: Math.random() * 100,
        },
        timestamp: new Date().toISOString(),
        image: image,
      };

      localStorage.setItem("latestAnalysis", JSON.stringify(mockResults));
      navigate("/results");
    }, 2500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #ebf4ff, #c3dafe)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <header
        style={{
          padding: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#2c5282",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffffcc",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        Stress Detection Analysis
      </header>

      <main
        style={{
          flex: 1,
          padding: "2rem",
          maxWidth: "700px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <p
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            color: "#4a5568",
            fontSize: "1.1rem",
          }}
        >
          Capture or upload a photo for facial emotion recognition and stress
          level assessment
        </p>

        <section
          style={{
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
              color: "#3182ce",
              fontSize: "1.25rem",
            }}
          >
            <Camera style={{ marginRight: 8 }} /> Photo Capture & Analysis
          </h2>
          <p style={{ marginBottom: "1rem", color: "#718096", fontSize: "0.95rem" }}>
            Use your camera or upload an image to analyze your current emotional
            state
          </p>

          {!image ? (
            <>
              {/* Camera Section */}
              <div
                style={{
                  backgroundColor: "#f7fafc",
                  borderRadius: "8px",
                  padding: "1rem",
                  marginBottom: "1.5rem",
                  maxWidth: "400px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  <Camera style={{ marginRight: 6 }} /> Live Camera Capture
                </h3>

                {cameraMode ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      style={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "8px",
                        border: "2px solid #cbd5e0",
                        display: "block",
                        marginBottom: "1rem",
                        objectFit: "cover",
                        backgroundColor: "#000",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      <button
                        onClick={capturePhoto}
                        style={{
                          padding: "0.5rem 1rem",
                          backgroundColor: "#3182ce",
                          color: "white",
                          borderRadius: "4px",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <Camera style={{ marginRight: 6 }} /> Capture Photo
                      </button>
                      <button
                        onClick={stopCamera}
                        style={{
                          padding: "0.5rem 1rem",
                          backgroundColor: "transparent",
                          border: "1px solid #3182ce",
                          color: "#3182ce",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "#e2e8f0",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <Camera
                        style={{ width: 64, height: 64, color: "#a0aec0" }}
                      />
                    </div>
                    <button
                      onClick={startCamera}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "#3182ce",
                        color: "white",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Start Camera
                    </button>
                  </div>
                )}
              </div>

              {/* Upload Section */}
              <div
                style={{
                  backgroundColor: "#f7fafc",
                  borderRadius: "8px",
                  padding: "1rem",
                  maxWidth: "400px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  <Upload style={{ marginRight: 6 }} /> Upload Image
                </h3>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3182ce",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Choose Image
                </label>
              </div>
            </>
          ) : (
            <>
              {/* Preview and Analyze Section */}
              <div
                style={{
                  maxWidth: "400px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                <img
                  src={image}
                  alt="Uploaded or Captured Preview"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    border: "2px solid #cbd5e0",
                    marginBottom: "1rem",
                    backgroundColor: "#edf2f7",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    style={{
                      padding: "0.5rem 1.25rem",
                      backgroundColor: isAnalyzing ? "#a0aec0" : "#38a169",
                      color: "white",
                      borderRadius: "4px",
                      border: "none",
                      cursor: isAnalyzing ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "600",
                      fontSize: "1rem",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    {isAnalyzing ? (
                      <>
                        <svg
                          style={{
                            marginRight: 6,
                            animation: "spin 1s linear infinite",
                            width: 18,
                            height: 18,
                            stroke: "white",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            strokeOpacity="0.25"
                          />
                          <path d="M4 12a8 8 0 018-8" strokeOpacity="1" />
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          style={{ marginRight: 6, width: 18, height: 18 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Analyze Image
                      </>
                    )}
                  </button>

                  <button
                    onClick={resetImage}
                    disabled={isAnalyzing}
                    style={{
                      padding: "0.5rem 1.25rem",
                      backgroundColor: "transparent",
                      border: "2px solid #e53e3e",
                      color: "#e53e3e",
                      borderRadius: "4px",
                      cursor: isAnalyzing ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "600",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      style={{ marginRight: 6, width: 18, height: 18 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4l16 16M20 4L4 20"
                      />
                    </svg>
                    Reset
                  </button>
                </div>

                {isAnalyzing && (
                  <div
                    style={{
                      height: "8px",
                      backgroundColor: "#e2e8f0",
                      borderRadius: "4px",
                      overflow: "hidden",
                      marginTop: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: `${analysisProgress}%`,
                        height: "100%",
                        backgroundColor: "#4299e1",
                        transition: "width 0.2s ease-in-out",
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </section>
      </main>

      <footer
        style={{
          padding: "1rem",
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#718096",
          backgroundColor: "#f7fafc",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        © {new Date().getFullYear()} Stress-Aware Learning Companion
      </footer>

      {/* Hidden Canvas for Capturing */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default StressDetection;
