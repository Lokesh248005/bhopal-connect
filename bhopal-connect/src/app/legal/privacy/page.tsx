export default function PrivacyPage() {
    return (
        <div className="container max-w-screen-xl px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">Last updated: February 03, 2026</p>

                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you create an account, update your profile, post a project, or communicate with other users. This includes:</p>
                <ul>
                    <li>Name and contact information</li>
                    <li>Profile information (skills, education, company details)</li>
                    <li>Communications sent through the platform</li>
                </ul>

                <h2>2. How We Use Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Match students with relevant projects and businesses with talent</li>
                    <li>Send technical notices, updates, security alerts, and support messages</li>
                </ul>

                <h2>3. Data Protection</h2>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
            </div>
        </div>
    );
}
