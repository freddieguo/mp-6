"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Session } from "next-auth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f9fc;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const Card = styled.div`
  background-color: white;
  padding: 3.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SignIn = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Button = styled.a`
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #0278ff;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0254ad;
    }
`;

const Info = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

export default function HomePage() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const res = await fetch("/api/auth/session");
            const data: Session = await res.json();
            setSession(data);
        };

        fetchSession();
    }, []);

    if (!session) {
        return (
            <Container>
                <Card>
                    <Heading>CS391 MP-6</Heading>
                    <SignIn>Please Sign In</SignIn>
                    <Button href="/api/auth/signin">Sign In</Button>
                </Card>
            </Container>
        );
    }

    return (
        <Container>
            <Card>
                <Heading>Welcome, {session.user?.name || "User"}!</Heading>
                <Text>Email: {session.user?.email || "No Email Provided"}</Text>
                {session.user?.image && <img src={session.user.image} alt="Profile" style={{ borderRadius: '50%', width: '100px', marginBottom: '1rem' }} />}
                <br/>
                <Button href="/api/auth/signout">Sign Out</Button>

                <Info>
                    <h2>This is MP-6</h2>
                    <br/>
                    <p>
                        <strong>Session Expires:</strong> {session.expires || "Unknown"}
                    </p>
                </Info>
            </Card>
        </Container>
    );
}
