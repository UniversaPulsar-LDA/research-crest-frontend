"use client";
import { FiFileText } from "react-icons/fi";
import { useRef } from "react";

interface UploadPdfModalProps {
  open: boolean;
  onClose: () => void;
}

export default function UploadPdfModal({
  open,
  onClose,
}: UploadPdfModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Upload Resume (PDF)</h3>

        <div className="upload-area">
          <FiFileText className="pdf-icon" />
          <p>Only PDF files are allowed</p>

          {/* Hidden input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            hidden
          />

          {/* Trigger button */}
          <button
            className="btn-rsu-upld"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Resume
          </button>
        </div>

        <div className="modal-actions">
          <button className="btn-rsu-cnsl" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}