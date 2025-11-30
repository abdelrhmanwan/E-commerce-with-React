import { X } from "lucide-react";
import "./UpperHeader.css";
import { useState } from "react";

export default function UpperHeader() {
  const [show, setShow] = useState(true);
  return show ? (
    <div className="upperHeaderLayout">
      <span>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="shopNowLinkStyle" href="#">
          ShopNow
        </a>
      </span>
      <X
        className="closeIconStyle"
        onClick={() => {
          setShow(false);
        }}
      />
    </div>
  ) : (
    ""
  );
}
