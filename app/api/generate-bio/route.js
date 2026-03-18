import { NextResponse } from "next/server";
import { profile } from "../../../lib/site-data";

function fallbackBio() {
  return `${profile.name} is a ${profile.role.toLowerCase()} from Nigeria who is focused on growing into a strong full-stack engineer. He enjoys building polished digital experiences, learning modern tools, and creating projects that solve real problems while opening new career opportunities in tech.`;
}

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ bio: fallbackBio(), source: "fallback" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-5.4-mini",
        input: `Write a short professional bio for ${profile.name}. Role: ${profile.role}. Background: ${profile.background}. Goals: ${profile.goals}. Hobbies: ${profile.hobbies.join(", ")}.`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ bio: fallbackBio(), source: "fallback" });
    }

    const data = await response.json();
    const bio =
      data.output_text ||
      data.output?.[0]?.content?.find((item) => item.type === "output_text")?.text ||
      fallbackBio();

    return NextResponse.json({ bio, source: "openai" });
  } catch (_error) {
    return NextResponse.json({ bio: fallbackBio(), source: "fallback" });
  }
}
