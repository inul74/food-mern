import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src={
              "https://images.tokopedia.net/img/cache/900/product-1/2017/6/23/0/0_f829b5ba-91ec-445b-b6a6-521e45529477_576_1024.jpg"
            }
            alt="res_image"
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Bakso Urat
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Semua Bakso yang kami buat tanpa bahan pengawet dan tanpa MSG,
              Bakso kuat bertahan +/- 3 bulan dlm kondisi Beku
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#D19254]">$ 5</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button
              onClick={() => {}}
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>

        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src={
              "https://graceland.ph/wp-content/uploads/2023/03/PANCIT-GUISADO-BILAO.jpg"
            }
            alt="res_image"
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Pancit Noodle
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Deliciously flavorful egg noodles stir-fried with a tasty
              combination of vegetables, meatballs, lechon, and special
              seasonings.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#D19254]">$ 10</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button
              onClick={() => {}}
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
