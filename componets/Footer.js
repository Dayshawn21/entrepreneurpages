import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <footer class="text-center text-white py-4 bg-gray-600 ">
      <h1> Entrepreneur Pages &copy;2021 </h1>
    </footer>
  );
};

export default Footer;
