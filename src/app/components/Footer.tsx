import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text-1">
          Third Eye Creative is the spark your ideas have been waiting for.
        </p>
        <div className="footer-links-container">
          <div className="footer-links">
            <Link href="#" className="footer-link">
              About Us
            </Link>
            <Link href="#" className="footer-link">
              Careers
            </Link>
            <Link href="#" className="footer-link">
              Work
            </Link>
            <Link href="#" className="footer-link">
              Contact Us
            </Link>
          </div>
          <div className="footer-social-links">
            <Link href={"#"}>
              <Image
                src="/assets/facebook.png"
                alt="Third Eye Creative Logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/assets/instagram.png"
                alt="Third Eye Creative Logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/assets/twtter.png"
                alt="Third Eye Creative Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
      <h3 className="footer-text-2">THIRD EYE</h3>
    </footer>
  );
}

export default Footer;
