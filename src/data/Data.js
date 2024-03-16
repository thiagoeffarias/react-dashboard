import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdraw
} from "@iconscout/react-unicons";


export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Notes"
    },
    {
        icon: UilUsersAlt,
        heading: "Tutors"
    },
    {
        icon: UilPackage,
        heading: "Messages"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    }
];

export const CardData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(0deg, rgba(166,230,145,1) 0%, rgba(41,242,198,1) 85%)",
            boxShadow: "0px 10px 20px 0px rgba(41,242,198,0.3)"
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(0deg, rgba(185,145,230,1) 0%, rgba(136,49,255,1) 85%)",
            boxShadow: "0px 10px 20px 0px rgba(136,49,255,0.3)"
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdraw,
        series: [
            {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ]
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(0deg, rgba(158,185,252,1) 0%, rgba(86,128,233,1) 85%)",
            boxShadow: "0px 10px 20px 0px rgba(86,128,233,0.3)"
        },
        barValue: 60,
        value: "4,270",
        png: UilChart,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ]
    },
];

