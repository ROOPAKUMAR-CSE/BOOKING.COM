import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=delhi,chennai,pollachi"
  );

  return (
    <div className="featured">
      { loading ? (
        "Loading please wait"
      ) : (
        <>
        <div className="featuredItem">
        <img
          src="https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1563715493579-e0b3e0493b60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbm5haSUyQyUyMGluZGlhfGVufDB8fDB8fHww"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1564845926814-d8c30466f9b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29pbWJhdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pollachi</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default Featured;