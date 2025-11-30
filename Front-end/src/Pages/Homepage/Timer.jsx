import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem("time");
    return saved ? parseFloat(saved) : 0;
  });

  const day = Math.floor(time / 86400);
  const sec = Math.floor(time % 60);
  const min = Math.floor((time / 60) % 60);
  const hou = Math.floor(time / 3600);

  useEffect(() => {
    let startTime = Date.now();

    const id = setInterval(() => {
      const changeTime = (Date.now() - startTime) / 1000;
      startTime = Date.now();

      setTime((prev) => {
        const newTime = prev + changeTime;
        localStorage.setItem("time", newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return(
    <>
     <div className="d-flex gap-2 mx-md-3 mx-lg-4 px-2 mx-5 pt-1 timer-margin">

                <div className="d-flex flex-column text-center ">
                  <span className="text-secondary small">Days</span>
                  <h2 className="d">{String(day).padStart(2, "0")}</h2>
                </div>

                <span className="text-danger fs-4 pt-4">:</span>

                <div className="d-flex flex-column text-center">
                  <span className="text-secondary small">Hours</span>
                  <h2 className="h">{String(hou).padStart(2, "0")}</h2>
                </div>

                <span className="text-danger fs-4 pt-4">:</span>

                <div className="d-flex flex-column text-center">
                  <span className="text-secondary small">Minutes</span>
                  <h2 className="m">{String(min).padStart(2, "0")}</h2>
                </div>

                <span className="text-danger fs-4 pt-4">:</span>

                <div className="d-flex flex-column text-center">
                  <span className="text-secondary small">Seconds</span>
                  <h2 className="s">{String(sec).padStart(2, "0")}</h2>
                </div>

              </div>
    </>
  )
}

export default Timer
