import * as React from "react";

interface EmailTemplateProps {
    name: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    message,
}) => (
    <div
        style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            color: "#333",
        }}
    >
        <p style={{ fontSize: "16px" }}>Hi {name},</p>
        <p style={{ fontSize: "14px" }}>
            Thank you for reaching out to me through my{" "}
            <a
                href="https://www.guruupdeshsingh.dev/"
                style={{ color: "#0066cc", textDecoration: "none" }}
            >
                portfolio website
            </a>
            ! This auto-reply is just confirming that I&apos;ve received your
            message.
        </p>
        <p style={{ fontSize: "14px" }}>
            I appreciate your interest and will get back to you as soon as
            possible.
        </p>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>Your message:</p>
        <blockquote
            style={{
                fontSize: "14px",
                fontStyle: "italic",
                borderLeft: "2px solid #0066cc",
                paddingLeft: "10px",
                margin: "10px 0",
            }}
        >
            {message}
        </blockquote>
        <p style={{ fontSize: "14px", marginTop: "20px" }}>Thank you,</p>
        <p
            style={{
                fontSize: "14px",
                marginTop: "20px",
                marginBottom: "20px",
            }}
        >
            Guru Updesh Singh
        </p>
        <div
            style={{
                borderTop: "1px solid #ddd",
                paddingTop: "15px",
                fontSize: "12px",
            }}
        >
            <p style={{ fontWeight: "bold", margin: "0 0 10px 0" }}>
                Guru Updesh Singh
            </p>
            <p style={{ margin: "0 0 10px 0" }}>Full Stack Developer</p>
            <p style={{ margin: "0" }}>
                <a
                    href="https://github.com/GuruUpdesh"
                    style={{
                        color: "#0066cc",
                        textDecoration: "none",
                        marginRight: "10px",
                    }}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/guru-updesh-singh-789050218"
                    style={{
                        color: "#0066cc",
                        textDecoration: "none",
                        marginRight: "10px",
                    }}
                >
                    LinkedIn
                </a>
                <a
                    href="https://www.guruupdeshsingh.dev/Resume.pdf"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                >
                    Resume
                </a>
            </p>
        </div>
    </div>
);
