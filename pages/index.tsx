import { NextPage } from "next";
import Link from 'next/link';
import { Button } from '@mantine/core';

const Demo: NextPage = () => {
  return (
    <Link href="/hello" passHref>
      <Button component="a">Next link button</Button>
    </Link>
  );
}


export default Demo
