import type { MetaFunction } from "@remix-run/node";
import {Heading} from '@radix-ui/themes';
import PassBox from "~/components/passBox";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className={'w-full h-[100svh]'}>
        <div className={'w-full h-full flex flex-col justify-center items-center'}>
          <div className={'flex flex-col gap-4 md:flex-row items-center'}>
            <Heading as='h1' weight='light' wrap='wrap' align='right'>Generate your password</Heading>
            <PassBox/>
          </div>
        </div>
      </div>
  );
}
