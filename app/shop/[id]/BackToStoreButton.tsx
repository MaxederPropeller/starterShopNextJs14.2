import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackToStoreButton() {
  return (
    <>
      <Link href="/shop">
        <Button className=" font-bold p-6 rounded mt-4 w-full

        ">
          Zurück zum Shop
        </Button>
    </Link>
</>
  );
}