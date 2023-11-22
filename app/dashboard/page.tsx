import Navbar from "../Navbar/page";
import Cards from "../cards/page";
import Comments from "../comments/page";
import Featured from "../featured/page";
import Footer from "../footer/page";
import Main from "../main/page";

export default function Dashboard() {
  return (
    <div className="w-full h-screen">
      <Navbar />

      {/* main */}
      <Main />

      {/* Featured */}

      <Featured />

      {/* Add */}

      <Cards />

      {/* comments */}

      <Comments />


      {/* footer */}

      <Footer />
    </div>
  );
}
