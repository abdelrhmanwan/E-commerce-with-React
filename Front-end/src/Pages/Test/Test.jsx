import Card from "../../component/Card/Card";

export default function Test() {
  return (
    <div>
      <Card
        imgSrc={
          "https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_600x.jpg?v=1739083257"
        }
        prodName={"Hamada"}
        finalPrice={100}
        salePercentage={35}
        heart={true}
        eye={true}
        del={true}
      />
    </div>
  );
}
