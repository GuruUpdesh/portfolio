import * as React from "react";

interface EmailTemplateProps {
	name: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	message,
}) => (
	<div>
		<p>Hi {name},</p>
		<p>
			Thank you for reaching out to me through my{" "}
			<a href="https://www.guruupdeshsingh.dev/">portfolio website</a>!
			This auto-reply is just letting you know that I got your message...
		</p>
        <p>
			I appreciate your interest and will get back to you as soon as
			possible.
		</p>
		<blockquote>{message}</blockquote>
		<p>Thank you,</p>
		<p>Guru Updesh Singh</p>
	</div>
);
