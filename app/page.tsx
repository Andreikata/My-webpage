"use client";

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { SearchIcon } from "./SearchIcon.jsx";
export default function App() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen w-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-foreground bg-background w-full">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <Navbar isBordered className="w-full mb-20">
          <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
              <AcmeLogo />
              <p className="hidden sm:block font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-3">
              <NavbarItem isActive>
                <Link href="#" aria-current="page" color="secondary">
                  Women
                </Link>
              </NavbarItem>
              <NavbarItem>
                <p>Men</p>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>

          <NavbarContent as="div" className="items-center" justify="end">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[20rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
              type="search"
            />

            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar isBordered as="button" className="transition-transform" color="secondary" name="Angel Mente" size="sm" src="" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">AeronLabs@gmail.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
        <div className="flex flex-wrap grid-cols-5 justify-center gap-20 w-full pt-20">
          <Image
            id="anjel"
            isZoomed
            width={240}
            alt="NextUI Fruit Image with Zoom"
            src="https://www.parfimo.bg/data/cache/thumb_min500_max1000-min500_max1000-12/products/949475/1564549446/chanel-bleu-de-chanel-parfyum-za-mazhe-150-ml-283081.jpg"
          />
          <Image id="anjel" isZoomed width={240} alt="NextUI Fruit Image with Zoom" src="https://parfum.bg/image/cache/data/04.parfumi/00.18/09-10.18/3348901368254-700x700.png" />
          <Image
            id="anjel"
            isZoomed
            width={240}
            alt="NextUI Fruit Image with Zoom"
            src="https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//j/e/jean-paul-gaultier-le-male-eau-de-toilette-125ml.jpg"
          />
          <Image id="anjel" isZoomed width={240} alt="NextUI Fruit Image with Zoom" src="https://parfium.bg/10966-medium_default/jean-paul-gaultier-le-beau-parfyum-za-maje-edt.jpg" />
          <Image id="anjel" isZoomed width={240} alt="NextUI Fruit Image with Zoom" src="https://mirisbg.com/wp-content/uploads/2023/11/jean-paul-gaultier-le-male-le-parfum-vapo-125ml.jpg" />
          <Image
            id="anjel"
            isZoomed
            width={240}
            alt="NextUI Fruit Image with Zoom"
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/j/o/c/50-sigma-male-perfume-italian-rich-fragrance-long-lasting-luxury-original-imagt72nq2ngqruv.jpeg?q=90&crop=false"
          />
          <Image
            id="anjel"
            isZoomed
            width={240}
            alt="NextUI Fruit Image with Zoom"
            src="https://cdn.basler-beauty.de/out/pictures/master/product/thumb/1698990-Giorgio-Armani-Emporio-Armani-Stronger-with-You-Absolutely-Parfum-100-ml.14902b17.jpg"
          />
          <Image id="anjel" isZoomed width={240} alt="NextUI Fruit Image with Zoom" src="https://www.sephora.com/productimages/sku/s2551133-main-zoom.jpg?imwidth=450" />
          <Image id="anjel" isZoomed width={240} alt="NextUI Fruit Image with Zoom" src="https://media.beautyplaza.com/data/hbb24/width1240/378531.jpg" />
          <Image
            id="anjel"
            isZoomed
            width={240}
            alt="NextUI Fruit Image with Zoom"
            src="https://parfium.bg/8841-medium_default/giorgio-armani-stronger-with-you-intensely-parfyum-za-maje-edp-100-ml.jpg"
          />
        </div>
        <footer>
          <div className="footerContainer">
            <div className="socialIcons">
              <Link href="" id="linke">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link href="" id="oink">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="" id="angel">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="" id="boro">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
            <div className="footerNav">
              <ul>
                <li>
                  <Link href="" id="angel">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="" id="angel">
                    Information
                  </Link>
                </li>

                <li>
                  <Link href="" id="angel">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="" id="angel">
                    Aeron Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBottom">
            <p>
              Copyright &copy;2024 Designed by <span className="designer">Aeron Labs</span>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
function setMounted(arg0: boolean) {
  throw new Error("Function not implemented.");
}
