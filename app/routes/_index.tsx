import type {MetaFunction} from "@remix-run/node";
import {Theme, IconButton, Heading} from '@radix-ui/themes';
import { SunIcon, MoonIcon} from "@radix-ui/react-icons";
import PassBox from "~/components/passBox";
import {useState} from "react";

export const meta: MetaFunction = () => {
    return [
        {title: "Password Generator"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <Theme appearance={darkMode? 'dark':'light'}>
            <div className={'w-full h-[100svh]'}>
                <div className={'absolute top-4 right-4'}>
                    <IconButton variant="ghost" size='3' onClick={() => setDarkMode(!darkMode)}>{darkMode? <MoonIcon/>:<SunIcon/>}</IconButton>
                </div>
                <div className={'w-full h-full flex flex-col justify-center items-center'}>
                    <div className={'flex flex-col gap-4 md:flex-row items-center'}>
                        <Heading as='h1' weight='light' wrap='wrap' align='right'>Generate your password</Heading>
                        <PassBox/>
                    </div>
                </div>
            </div>
        </Theme>
    );
}
