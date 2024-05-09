import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError,
} from "@remix-run/react";
import tailwindstylesheet from "~/tailwind.css?url";
import radixThemeSheet from '@radix-ui/themes/styles.css?url';
import stylesheet from "~/style.css?url";
import {LinksFunction} from "@remix-run/node";
import {Theme} from '@radix-ui/themes';

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: tailwindstylesheet},
    {rel: "stylesheet", href: radixThemeSheet},
    {rel: 'stylesheet', href: stylesheet},
];

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Theme accentColor="pink" appearance={'inherit'}>
            {children}
            <ScrollRestoration/>
            <Scripts/>
        </Theme>
        </body>
        </html>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    return (
        <html lang="en">
        <head>
            <title>Oh no!</title>
            <Meta/>
            <Links/>
        </head>
        <body>
        <div className={'w-full h-[100svh] flex flex-row items-center justify-center'}>
            <p className={'text-xl font-bold border-black border-r-[1px] pr-2 mr-2'}>404</p>
            <p>Page Not Found</p>
        </div>
        <Scripts/>
        </body>
        </html>
    );
}


export default function App() {
    return <Outlet/>;
}
