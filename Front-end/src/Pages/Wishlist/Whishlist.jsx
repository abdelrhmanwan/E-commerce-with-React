import "./Whishlist.css";
import Card from "../../component/Card/Card";

export default function Whishlist() {
  const a = 5;
  return (
    <div className={"whishListPageLayout"}>
      <div className="centerHolder">
        <div className="headlinesStyle">
          <h1>Whishlist ({a})</h1>
          <button>Move All To Bag</button>
        </div>
        <div className="cardsHolder">
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
        </div>
        <div className="headlinesStyle">
          <div className="redZoneAndWordHolder">
            <div className="redZoneStyle"></div> Just For You
          </div>
          <button>See All</button>
        </div>
        <div className="cardsHolder">
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
          <Card
            imgSrc={
              "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
            }
            prodName={"Hamada"}
            finalPrice={100}
            salePercentage={35}
            del={true}
          />
        </div>
      </div>
    </div>
  );
}
