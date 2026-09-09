import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useThemeMode } from '@/context/ThemeContext';

export default function ApiSection() {
  const { isDark } = useThemeMode();
  const [activeTab, setActiveTab] = React.useState('curl');

  const codeSnippets = {
    curl: `curl https://api.openledger.xyz/v1/chat/completions \\
  -H "Authorization: Bearer $OPENLEDGER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
      "model": "auto",
      "messages": [
        { "role": "user", "content": "Explain quantum computing" }
      ]
    }'`,
    python: `import os
from openledger import Client

client = Client(
    api_key=os.getenv("OPENLEDGER_API_KEY")
)

chat = client.chat.create(model="auto")
chat.append(user("Explain quantum computing"))
response = chat.sample()
print(response.content)`,
    typescript: `import { OpenLedger } from 'openledger-node';

const client = new OpenLedger({
  apiKey: process.env.OPENLEDGER_API_KEY
});

const response = await client.chat.completions.create({
  model: 'auto',
  messages: [{ role: 'user', content: 'Explain quantum computing' }]
});
console.log(response.choices[0].message.content);`,
    openai: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENLEDGER_API_KEY,
  baseURL: 'https://api.openledger.xyz/v1'
});

const response = await client.chat.completions.create({
  model: 'auto',
  messages: [{ role: 'user', content: 'Explain quantum computing' }]
});`
  };

  return (
    <Box
      component="section"
      id="api"
      sx={{
        position: 'relative',
        backgroundColor: 'var(--bg-section)',
        color: 'var(--text-primary)',
        py: { xs: 8, md: 14 },
        transition: 'background-color 0.35s ease',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2.5, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 8, md: 6 }} alignItems="center">
          
          {/* Left Column: Content */}
          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', mb: 2 }}>
              For developers
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 600, fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem' }, lineHeight: 1.1, letterSpacing: '-0.04em', mb: 3 }}>
              <span style={{ color: 'var(--text-primary)' }}>One API.</span><br/>
              <span style={{ color: 'var(--text-muted)' }}>Every modality.</span>
            </Typography>

            <Typography sx={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, mb: 5, maxWidth: 450 }}>
              Text, code, voice, images, and video — all through a single unified API. Start building in seconds.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mb: 8 }}>
              <Button sx={{ 
                backgroundColor: isDark ? '#fff' : '#0F172A', 
                color: isDark ? '#000' : '#fff', 
                py: 1.2, px: 3, borderRadius: '99px', 
                fontWeight: 600, fontSize: '0.95rem', textTransform: 'none',
                '&:hover': { opacity: 0.9, backgroundColor: isDark ? '#fff' : '#0F172A' }
              }}>
                Get API Key
              </Button>
              <Button sx={{ 
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, 
                backgroundColor: 'transparent',
                color: 'var(--text-primary)', py: 1.2, px: 3, borderRadius: '99px', 
                fontWeight: 600, fontSize: '0.95rem', textTransform: 'none',
                '&:hover': { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }
              }}>
                Read Docs
              </Button>
            </Box>

            {/* Stats Row */}
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>1M+</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>API calls per day</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>&lt;200ms</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Median latency</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>5+</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Model families</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column: Code Block & Tabs */}
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative' }}>
              
              {/* Glow Behind Terminal */}
              <Box sx={{ 
                position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%',
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
                filter: 'blur(40px)', zIndex: 0, display: isDark ? 'block' : 'none'
              }} />

              {/* Terminal Window */}
              <Box sx={{ 
                position: 'relative', zIndex: 1,
                backgroundColor: isDark ? '#0A0A0A' : '#F9FAFB',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: isDark ? '0 32px 80px rgba(0,0,0,0.8)' : '0 24px 60px rgba(0,0,0,0.1)',
                mb: 3
              }}>
                
                {/* Top Bar */}
                <Box sx={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  px: 2.5, py: 1.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  borderBottom: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)'
                }}>
                  {/* Mac Window Dots */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27C93F' }} />
                  </Box>
                  
                  {/* Copy Button */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', '&:hover': { color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)' } }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Copy</Typography>
                  </Box>
                </Box>

                {/* Code Area */}
                <Box sx={{ p: 4, pt: 3, overflowX: 'auto', minHeight: 280 }}>
                  <pre style={{ margin: 0, fontFamily: '"JetBrains Mono", "Fira Code", monospace', fontSize: '0.85rem', lineHeight: 1.7, color: isDark ? '#E5E7EB' : '#111827' }}>
                    <code>
                      {codeSnippets[activeTab].split('\\n').map((line, i) => {
                        let highlightedLine = line
                          .replace(/curl /g, `<span style="color: ${isDark ? '#F87171' : '#E11D48'}">curl </span>`)
                          .replace(/import /g, `<span style="color: ${isDark ? '#F87171' : '#E11D48'}">import </span>`)
                          .replace(/const /g, `<span style="color: ${isDark ? '#F87171' : '#E11D48'}">const </span>`)
                          .replace(/from /g, `<span style="color: ${isDark ? '#F87171' : '#E11D48'}">from </span>`)
                          .replace(/"(.*?)"/g, `<span style="color: ${isDark ? '#A78BFA' : '#6D28D9'}">"$1"</span>`)
                          .replace(/'(.*?)'/g, `<span style="color: ${isDark ? '#A78BFA' : '#6D28D9'}">'$1'</span>`)
                          .replace(/-H /g, `<span style="color: ${isDark ? '#60A5FA' : '#2563EB'}">-H </span>`)
                          .replace(/-d /g, `<span style="color: ${isDark ? '#60A5FA' : '#2563EB'}">-d </span>`);
                          
                        return (
                          <div key={i} dangerouslySetInnerHTML={{ __html: highlightedLine || ' ' }} />
                        );
                      })}
                    </code>
                  </pre>
                </Box>
              </Box>

              {/* Tabs Below the Window */}
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap', alignItems: 'center' }}>
                {[
                  { id: 'python', label: 'Python' },
                  { id: 'typescript', label: 'TypeScript' },
                  { id: 'openai', label: 'TypeScript (OpenAI SDK)' },
                  { id: 'curl', label: 'cURL' }
                ].map(tab => (
                  <Box 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    sx={{ 
                      px: { xs: 1.5, sm: 2 }, py: 0.8, borderRadius: '99px', cursor: 'pointer',
                      border: activeTab === tab.id ? `1px solid ${isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'}` : '1px solid transparent',
                      color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-muted)',
                      transition: 'all 0.2s ease',
                      '&:hover': { color: 'var(--text-primary)' }
                    }}
                  >
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>{tab.label}</Typography>
                  </Box>
                ))}
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
