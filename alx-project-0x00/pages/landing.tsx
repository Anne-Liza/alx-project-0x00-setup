import Card from "@/components/Card"
import Button from "@/components/Button";


const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className=" text-x1 font-extralight">Landing Page</h1>
            {/* Small Button - rounded-sm */}
            <Button title="Small Button" styles="px-4 py-2 text-sm rounded-sm" />

            {/* Medium Button - rounded-md */}
            <Button title="Medium Button" styles="px-6 py-3 text-base rounded-md" />

            {/* Large Button - rounded-full */}
            <Button title="Large Button" styles="px-8 py-4 text-lg rounded-full" />
        </div>
    )
}
export default Landing;
