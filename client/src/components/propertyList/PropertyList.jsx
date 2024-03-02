import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByType"
  );


  const images = [
    "https://media.istockphoto.com/id/512882668/photo/entering-hotel-room.jpg?s=612x612&w=0&k=20&c=dkStriVIj-19NVWg1AgHdBAtRGndus-sQJiZdo5N6ss=",

    "https://media.istockphoto.com/id/931243836/photo/modern-apartments.jpg?s=612x612&w=0&k=20&c=Ncvxtv4JecFNLDr5xXJ6ncPoYRq60u2jm39KtN42s8c=",

    "https://media.istockphoto.com/id/1492313721/photo/modern-luxury-villa-with-private-pool-at-night.jpg?s=612x612&w=0&k=20&c=edyOwSOmXGZvRpUmWIVDgCqbiKpKKMebllHG1LWagR4=",

    "https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA=",

    "https://media.istockphoto.com/id/1287459925/photo/cabin-in-woods-at-dusk.jpg?s=612x612&w=0&k=20&c=ehdaEAb7aphdcfyNTlnQKpOh-G1eLr6eVI3K4tpXxh8=",
  ];
  return (
    <div className="pList">
      { loading ? (
        "loading"
      ) : (
        <>
        {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;