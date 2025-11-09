
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "Alur Pendaftaran",
        link: "/alur-pendaftaran",
        has_dropdown: false,
    },
    {
        id: 3,
        title: "Program Kelas",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/excellent", title: "Excellent" },
            { link: "/tahfidz", title: "Tahfidz" },
            { link: "/m-ico", title: "M-ICO" },
        ],
    },
    {
        id: 4,
        title: "Nonakademik",
        link: "/nonakademik",
        has_dropdown: false,
    },
    {
        id: 5,
        title: "About Us",
        link: "/about-us",
        has_dropdown: false,
    },
];

export default menu_data;