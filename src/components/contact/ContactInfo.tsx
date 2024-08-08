import React from "react";

const ContactInfo = () => {
    return (
        <div className="flex h-full flex-col justify-between gap-4">
            <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                Whether you&apos;re a developer, recruiter, student, or anyone
                in between, I&apos;m always eager to discuss tech!
            </p>
            <div>
                <p>Email me</p>
                <p className="text-sm font-light text-muted-foreground">
                    guruupdeshsingh@gmail.com
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
