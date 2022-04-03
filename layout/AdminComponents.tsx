import { FC, useState, useEffect } from "react";
import {
    Navbar, Header, Grid,
    ThemeIcon, UnstyledButton, Group, Text, DefaultMantineColor
} from '@mantine/core';
import {
    UserSearch, AlertCircle, Messages, Database,
    Archive
} from 'tabler-icons-react';
// component
// import { User } from "../pages/admin/_user";

export const AdminHeader: FC = () => {


    return (
        <Header height={60} p="xs">The Crazy Blogger!</Header>
    )
}


export const NavbarAdmin: FC = () => {
    return (
        <Navbar width={{ base: 300 }} p="xs">
            <Navbar.Section grow>
                <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
                {/* <User /> */}
            </Navbar.Section>
        </Navbar>
    )
}

export const AppAdmin: FC = () => {

    return (
        <Grid sx={{ '& > *': { backgroundColor: 'red' } }} gutter="lg">
            <Grid.Col span={4}>
                <Grid sx={{ '& > *': { backgroundColor: 'green' } }} gutter="lg" columns={4}>
                    <Grid.Col span={2} >1</Grid.Col>
                    <Grid.Col span={2} >2</Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={4}>2</Grid.Col>
            <Grid.Col span={4}>3</Grid.Col>
        </Grid>

    )
}


// 

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
}



function MainLink({ icon, color, label }: MainLinkProps) {
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
        >
            <Group>
                <ThemeIcon color={color} variant="light" >
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const data: { icon: JSX.Element, color: DefaultMantineColor, label: string }[] = [
    { icon: <Archive size={20} />, color: 'indigo', label: 'All inlägg' },
    { icon: <UserSearch size={20} />, color: 'teal', label: 'Användare' },
    { icon: <Messages size={20} />, color: 'violet', label: 'Inställningar' },
    { icon: <Messages size={20} />, color: 'gray', label: 'SEO Info' },
    { icon: <Database size={20} />, color: 'grape', label: 'Support' },
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
}
