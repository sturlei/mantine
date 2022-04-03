import type { NextPage } from 'next'
import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { AppShell, } from '@mantine/core';
import { AdminHeader, NavbarAdmin } from "../../layout/AdminComponents";
import styled from "@emotion/styled";

import Link from 'next/link';
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Link href="/hello" passHref>
      <Button component="a">Next link button</Button>
    </Link>
  );
}

const Home: NextPage = () => {
  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}

      header={<AdminHeader />}
      navbar={<NavbarAdmin />}

    >
      <Test>TEST</Test>
    </AppShell>

  )
}

const Test = styled.div`
  background-color: red;
  width: 10rem ;
  height:10rem ;
  border-radius: 10rem;

`;


export default Demo
