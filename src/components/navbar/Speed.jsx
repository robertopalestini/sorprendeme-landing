import { SpeedDial } from 'primereact/speeddial';


export const SpeedDialDemo = () => {

    const items = [
        {
            label: 'Inico',
            icon: 'pi pi-home',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {
            label: 'Servicios',
            icon: 'pi pi-server',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {
            label: 'Nosotros',
            icon: 'pi pi-sitemap',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {
            label: 'Contacto',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {
            label: 'Login',
            icon: 'pi pi-user',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    return (
        <SpeedDial model={items} direction="down" showIcon="pi pi-bars"  buttonStyle={{"width": "50px", "height": "50px","background-color":"#ffffff", "border-color": "#ffffff", "color": "#000", "font-size": "15px"}} />
    );
}