import { nanoid } from 'nanoid';

const navItems = [
    {
        id: nanoid(),
        text: "HOME",
        link: "/"
    },
        {
        id: nanoid(),
        text: "MOVIES",
        link: "/movies"
    },
];

export default navItems;