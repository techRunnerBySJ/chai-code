import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FaShoppingCart } from "react-icons/fa";

interface InfoAndCtaButtonProps {
  buttonUrl?: string; // Accept buttonUrl as a prop
}

export function InfoAndCtaButton({ buttonUrl }: InfoAndCtaButtonProps) {
  const handleButtonClick = () => {
    if (buttonUrl) {
      window.open(buttonUrl, "_blank"); // Open the URL in a new tab
    }
  };

  return (
    <div className="flex justify-center text-center w-full">
      <HoverBorderGradient
        containerClassName="rounded-md w-full"
        as="button"
        onClick={handleButtonClick} // Handle redirection on click
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full justify-center"
        role="button"
        aria-label="Buy now"
        tabIndex={0}
      >
        <FaShoppingCart className="h-4 w-4" aria-hidden="true" />
        <span>BUY NOW</span>
      </HoverBorderGradient>
    </div>
  );
}