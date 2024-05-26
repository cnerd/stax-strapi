import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";

const CTO = () => {
  const [cto, setCto] = React.useState();
  React.useEffect(() => {
    const getCto = async () => {
      const response = await axios.get(`${baseApiUrl}/api/cto?populate=*`);
      setCto(response.data);
      // console.log(response.data);
    };
    getCto();
  }, []);
  return (
    <>
      {cto && (
        <div className="overview-area pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {cto.data.attributes.ctoInfo.map((info) => (
                <div className="col-lg-3 col-md-6" key={info.id}>
                  <div className="overview-card">
                    <h3>{info.title}</h3>
                    <span>{info.text}</span>
                    <div className="overview-shape">
                      <Image
                        src="/images/overview/overview-shape.png"
                        alt="image"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTO;
