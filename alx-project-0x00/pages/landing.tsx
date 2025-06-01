import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-xl font-extralight">Landing Page</h1>

            {/* Small Button - rounded-sm */}
            <Button title="Small Button" styles="rounded-sm px-4 py-2 text-sm" />

            {/* Medium Button - rounded-md */}
            <Button title="Medium Button" styles="rounded-md px-6 py-3 text-base" />

            {/* Large Button - rounded-full */}
            <Button title="Large Button" styles="rounded-full px-8 py-4 text-lg" />
        </div>
    );
};

export default Landing;
