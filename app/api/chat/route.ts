import { NextRequest } from 'next/server';
import { streamText, formatStreamPart } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { buildSystemPrompt, kb } from '@/app/ai/kb';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const runtime = 'edge';

function getKnowledgeBaseResponse(userQuery: string): string {
  const query = userQuery.toLowerCase();

  if (
    query.includes('73string') ||
    query.includes('authorization') ||
    query.includes('scim') ||
    query.includes('uam') ||
    query.includes('identity')
  ) {
    return (
      "At 73Strings (Enterprise Multi-Tenant Authorization Platform), Neel architected backend microservices for User Access Management (UAM), SCIM 2.0 auto-provisioning, and enterprise task scheduling using Java 21 & Spring Boot 3.\n\n" +
      "Key engineering outcomes:\n" +
      "• Reduced API response times by over 50% via SQL N+1 query elimination and composite indexing.\n" +
      "• Engineered a SCIM 2.0 auto-provisioning microservice syncing users in real time with Okta, Microsoft Entra ID, and PingOne.\n" +
      "• Automated SAML SSO tenant onboarding using Azure AD B2C custom policy XML generation and Microsoft Graph API.\n" +
      "• Streamed compliance audit events from Elasticsearch to customer AWS S3 buckets in 10,000-record batches for Splunk SIEM ingestion."
    );
  }

  if (
    query.includes('latency') ||
    query.includes('50%') ||
    query.includes('n+1') ||
    query.includes('performance') ||
    query.includes('optimi') ||
    query.includes('query')
  ) {
    return (
      "Neel achieved a 50%+ API response time improvement on 73Strings by tackling database query amplification:\n\n" +
      "1. Traced latency bottlenecks using Datadog APM down to specific database spans.\n" +
      "2. Eliminated SQL N+1 queries by replacing iterative ORM lazy loading with targeted JPA JOIN FETCH projections.\n" +
      "3. Added composite database indexes on high-cardinality multi-tenant lookup columns.\n" +
      "4. Introduced Redis distributed caching with atomic invalidation for frequently evaluated permission hierarchies.\n" +
      "5. Deployed multi-threaded direct SQL execution for bulk permission copying during organization onboarding."
    );
  }

  if (
    query.includes('ai') ||
    query.includes('gemini') ||
    query.includes('support') ||
    query.includes('jira') ||
    query.includes('automation') ||
    query.includes('llm') ||
    query.includes('email')
  ) {
    return (
      "Neel's recent AI engineering work focuses on practical backend workflow automation:\n\n" +
      "He engineered an AI-Powered Customer Support Automation system that continuously monitors incoming support emails, classifies intent, checks a ground-truth knowledge base, and synthesizes answers via Google Gemini.\n\n" +
      "Crucially, it follows a strict zero-hallucination policy: if verified information is insufficient to answer a customer request, the workflow sends an immediate acknowledgment to the customer and automatically creates a structured Jira ticket routed to the responsible human team."
    );
  }

  if (
    query.includes('livcast') ||
    query.includes('stream') ||
    query.includes('video') ||
    query.includes('rtmp') ||
    query.includes('ffmpeg')
  ) {
    return (
      "Livcast is a multi-platform live video streaming platform Neel built with a React Native mobile application and Java Spring Boot backend.\n\n" +
      "Technical highlights:\n" +
      "• Concurrent live RTMP dispatch streaming out to YouTube, Facebook, and Twitch.\n" +
      "• Automated video transcoding and pre-recorded broadcast scheduling using FFmpeg workers.\n" +
      "• Direct multipart chunked video uploads to AWS S3 with resume support.\n" +
      "• Real-time WebSocket connection for stream health and viewer metric telemetry."
    );
  }

  if (
    query.includes('skill') ||
    query.includes('stack') ||
    query.includes('tech') ||
    query.includes('java') ||
    query.includes('spring') ||
    query.includes('tools')
  ) {
    return (
      "Neel's core technology matrix:\n\n" +
      "• Backend: Java 21, Spring Boot 3, Spring Security, Spring Data JPA, REST APIs, Microservices, WebSockets.\n" +
      "• Distributed Systems: Redis Caching, Elasticsearch, Concurrency, ShedLock, Multi-Tenancy, LLD.\n" +
      "• Identity & IAM: SCIM 2.0, SAML 2.0, OAuth2, JWT, Azure AD B2C, Microsoft Entra ID, Okta, PingOne.\n" +
      "• Cloud & DevOps: AWS (S3, STS), Azure, Splunk SIEM, Datadog APM.\n" +
      "• Database: MySQL (Indexing, SQL N+1 resolution).\n" +
      "• AI Workflows: Google Gemini API, Knowledge-Base Q&A, Jira Workflow Automation.\n" +
      "• Supporting Frontend: React, React Native, TypeScript."
    );
  }

  if (
    query.includes('impact') ||
    query.includes('feedback') ||
    query.includes('b2c') ||
    query.includes('review') ||
    query.includes('praise') ||
    query.includes('troubleshoot')
  ) {
    return (
      "Neel's verified engineering feedback highlights 5 core impact areas beyond writing code:\n\n" +
      "1. Azure B2C Engineering: Strong ownership of Azure B2C implementations, including complex edge cases, exception handling, and authentication flows.\n" +
      "2. Auto-Onboarding: Contributed to auto-onboarding improvements designed to make the B2C user experience more reliable and streamlined.\n" +
      "3. Enterprise SSO: Supported Okta SSO integration and worked through authentication-flow issues to ensure reliable login behavior.\n" +
      "4. Module Ownership: Owns a key B2C resource/module and drives solutions through completion, including Roles & Responsibilities.\n" +
      "5. Problem Solving: Strong investigation and troubleshooting skills, particularly when diagnosing and resolving complex exceptions."
    );
  }

  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('hire') ||
    query.includes('reach') ||
    query.includes('touch') ||
    query.includes('resume') ||
    query.includes('cv')
  ) {
    return (
      `You can reach Neel directly:\n\n` +
      `• Email: ${PORTFOLIO_DATA.socials.email}\n` +
      `• LinkedIn: ${PORTFOLIO_DATA.socials.linkedin}\n` +
      `• GitHub: ${PORTFOLIO_DATA.socials.github}\n` +
      `• Location: ${PORTFOLIO_DATA.personal.location}\n\n` +
      `His official CV is also downloadable directly from this website (${PORTFOLIO_DATA.socials.resumeUrl}). He is open to full-time backend positions, distributed systems contracts, and architectural consulting.`
    );
  }

  if (
    query.includes('experience') ||
    query.includes('background') ||
    query.includes('role') ||
    query.includes('company') ||
    query.includes('who is') ||
    query.includes('promethean')
  ) {
    return (
      "Neel Shah is a Software Engineer specializing in Backend & Distributed Systems at Promethean Tech (July 2022 – Present) based in Ahmedabad, India.\n\n" +
      "He designs and operates backend microservices supporting 1M+ active users, 100+ enterprise organizations, and 13 SaaS production environments. His work spans enterprise IAM (SCIM 2.0/SAML), distributed caching with Redis, high-throughput database tuning, and AI-enabled backend workflows."
    );
  }

  return (
    `I am Neel Shah's engineering assistant. Neel is a Backend & Distributed Systems Engineer specializing in Java 21, Spring Boot 3, microservices, enterprise IAM (SCIM/SSO), and AI-enabled workflows.\n\n` +
    `Feel free to ask about:\n` +
    `1. His work on 73Strings (1M+ users, SCIM 2.0, 50%+ latency reduction)\n` +
    `2. The Livcast live video RTMP streaming platform\n` +
    `3. His AI-Powered Customer Support Automation workflow with Gemini & Jira\n` +
    `4. His skills or how to get in touch (${PORTFOLIO_DATA.socials.email})`
  );
}

function streamFallbackText(text: string): Response {
  const words = text.split(' ');
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const chunk = (i === 0 ? '' : ' ') + words[i];
        controller.enqueue(encoder.encode(formatStreamPart('text', chunk)));
        await new Promise((resolve) => setTimeout(resolve, 15));
      }
      controller.enqueue(
        encoder.encode(
          formatStreamPart('finish_message', {
            finishReason: 'stop',
            usage: { promptTokens: 0, completionTokens: 0 },
          })
        )
      );
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
    },
  });
}

export async function POST(req: NextRequest) {
  let userQuery = '';
  try {
    const body = await req.json();
    const messages = body.messages || [];
    const lastUserMessage = [...messages].reverse().find((m: any) => m.role === 'user');
    userQuery = lastUserMessage?.content || '';

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    // If an API key is provided, use Google Gemini streamText
    if (apiKey) {
      try {
        const google = createGoogleGenerativeAI({ apiKey });
        const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

        const result = await streamText({
          model: google(modelName) as any,
          system: buildSystemPrompt(),
          messages,
        });

        return result.toAIStreamResponse();
      } catch (geminiError: any) {
        console.warn('Gemini API call failed, falling back to local knowledge base:', geminiError?.message);
        // Fallback to grounded knowledge base engine
        const fallbackText = getKnowledgeBaseResponse(userQuery);
        return streamFallbackText(fallbackText);
      }
    }

    // When API key is not configured, seamlessly respond using the grounded knowledge base
    const fallbackText = getKnowledgeBaseResponse(userQuery);
    return streamFallbackText(fallbackText);
  } catch (e: any) {
    console.error('Chat endpoint error:', e);
    const fallbackText = getKnowledgeBaseResponse(userQuery);
    return streamFallbackText(fallbackText);
  }
}
