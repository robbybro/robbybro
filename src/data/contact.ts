export interface ContactItem {
    name: string;
    href: string;
    username: string;
    backgroundColor: string;
    iconClass: string;
}

const contactItems: ContactItem[] = [
    {
        name: 'gmail',
        href: 'mailto:robbybrosman@gmail.com',
        username: 'robbybrosman@gmail.com',
        backgroundColor: '#d14836',
        iconClass: 'fa-google',
    },
    {
        name: 'github',
        href: 'https://github.com/robbybro/',
        username: 'robbybro',
        backgroundColor: '#24292e',
        iconClass: 'fa-github',
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/robertbrosman/',
        username: '@robertbrosman',
        backgroundColor: '#0084bf',
        iconClass: 'fa-linkedin',
    },
    {
        name: 'medium',
        href: 'https://medium.com/@robbybro',
        username: '@robbybro',
        backgroundColor: '#03a87c',
        iconClass: 'fa-medium',
    },
    {
        name: 'brewersfriend',
        href: 'https://www.brewersfriend.com/homebrew/brewer/88086/robbybro',
        username: 'robbybro',
        backgroundColor: '#f35d2a',
        iconClass: 'fa-beer',
    },
];

export default contactItems;
