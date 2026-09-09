import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useThemeMode } from '@/context/ThemeContext';

export default function TokenOptimizationSection() {
  const { isDark } = useThemeMode();

  return (
    <Container maxWidth="lg" sx={{ pb: 15 }}>
      {/* NEW TOKEN OPTIMIZATION LAYOUT */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column (Text & Blue Card) */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: '#64748B', textTransform: 'uppercase', mb: 2 }}>
              Token Optimisation
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 700, color: 'var(--text-primary)', mb: 2, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              And it keeps getting cheaper.
            </Typography>
            <Typography sx={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, mb: 4 }}>
              The router spends what a request needs, not what the biggest model charges.
            </Typography>
            
            {/* Blue Card */}
            <Box sx={{ 
              background: isDark ? 'linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 100%)' : '#FFFFFF',
              borderRadius: '24px', p: 4,
              border: isDark ? '1px solid rgba(59, 130, 246, 0.2)' : 'none',
              boxShadow: isDark ? 'none' : '0 10px 40px rgba(0,0,0,0.03)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 3 }}>
                <Box>
                  <Typography sx={{ fontSize: '1rem', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 500, lineHeight: 1, mb: 0.5 }}>Up to</Typography>
                  <Typography sx={{ fontSize: '4.5rem', fontWeight: 800, color: '#2563EB', lineHeight: 1, letterSpacing: '-0.03em' }}>60%</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.95rem', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 600, lineHeight: 1.3 }}>
                  fewer<br/>tokens<br/>billed.
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.95rem', color: isDark ? '#94A3B8' : '#64748B', mt: 3 }}>
                Smarter model selection.<br/>Lower cost. Same quality.
              </Typography>
            </Box>
          </Grid>

          {/* Right Column (Big Interactive Infographic) */}
          <Grid item xs={12} md={8}>
            <Box sx={{ 
              backgroundColor: isDark ? '#0A0A0A' : '#F8FAFC', 
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0',
              borderRadius: '32px', 
              p: { xs: 3, md: 4 },
              boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 12px 40px rgba(0,0,0,0.04)'
            }}>
              
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Tokens in a typical request
                </Typography>
                <Button sx={{ 
                  borderRadius: '99px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0', 
                  color: 'var(--text-primary)', textTransform: 'none', fontSize: '0.85rem', fontWeight: 600, py: 0.5, px: 2,
                  backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
                  boxShadow: isDark ? 'none' : '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <Box sx={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                    <svg style={{ width: 10, height: 10, color: 'var(--bg-default)', marginLeft: 1 }} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </Box>
                  See how it works
                </Button>
              </Box>

              {/* Flowchart Row */}
              <Box sx={{ 
                display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, overflowX: 'auto', pb: 2,
                '&::-webkit-scrollbar': { height: '12px' },
                '&::-webkit-scrollbar-track': { background: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', borderRadius: '10px' },
                '&::-webkit-scrollbar-thumb': { background: isDark ? 'rgba(255,255,255,0.2)' : '#CBD5E1', borderRadius: '10px', border: isDark ? '2px solid #0A0A0A' : '2px solid #FFFFFF', backgroundClip: 'padding-box' }
              }}>
                {/* Step 1 */}
                <Box sx={{ flex: 1, minWidth: 200, display: 'flex', gap: 2, alignItems: 'flex-start', p: 2.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', mb: 0.5 }}>Your request</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Summarise this report and create a chart.</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', color: isDark ? '#475569' : '#94A3B8', px: 0.5 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Box>

                {/* Step 2 */}
                <Box sx={{ flex: 1, minWidth: 200, display: 'flex', gap: 2, alignItems: 'flex-start', p: 2.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', mb: 0.5 }}>Smart Router</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Understands the task and picks the best model.</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', color: isDark ? '#475569' : '#94A3B8', px: 0.5 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Box>

                {/* Step 3 */}
                <Box sx={{ flex: 1, minWidth: 200, display: 'flex', gap: 2, alignItems: 'flex-start', p: 2.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', mb: 0.5 }}>Right model</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Efficient. Accurate. Lower cost.</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Middle Row: Unified Bars & 60% */}
              <Box sx={{ 
                display: 'flex', 
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)', 
                borderRadius: '16px', 
                mb: 4, 
                backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
                boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)',
                flexWrap: { xs: 'wrap', md: 'nowrap' }
              }}>
                {/* Bars Section */}
                <Box sx={{ flex: 1.5, p: { xs: 3, md: 4 } }}>
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', gap: 4, mb: 1.5 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography sx={{ fontSize: '0.9rem', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 700, lineHeight: 1.3 }}>Without<br/>optimisation</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: isDark ? '#64748B' : '#94A3B8', fontWeight: 600, lineHeight: 1.3 }}>~ 10,000<br/>tokens</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ height: 20, backgroundColor: isDark ? '#1E293B' : '#E2E8F0', borderRadius: '99px', width: '100%', position: 'relative', border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '90%', backgroundColor: isDark ? '#475569' : '#94A3B8', borderRadius: '99px' }} />
                    </Box>
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', gap: 4, mb: 1.5 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography sx={{ fontSize: '0.9rem', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 700, lineHeight: 1.3 }}>With smart<br/>routing</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: isDark ? '#64748B' : '#94A3B8', fontWeight: 600, lineHeight: 1.3 }}>~ 4,000<br/>tokens</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ height: 20, backgroundColor: isDark ? '#1E293B' : '#E2E8F0', borderRadius: '99px', width: '100%', position: 'relative', border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '40%', backgroundColor: '#2563EB', borderRadius: '99px' }} />
                    </Box>
                  </Box>
                </Box>

                {/* Vertical Divider */}
                <Box sx={{ width: '1px', borderLeft: isDark ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed #E2E8F0', my: 4, display: { xs: 'none', md: 'block' } }} />

                {/* 60% Box */}
                <Box sx={{ width: { xs: '100%', md: 240 }, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography sx={{ fontSize: '1.1rem', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 500 }}>Up to</Typography>
                  <Typography sx={{ fontSize: '5.5rem', fontWeight: 800, color: '#2563EB', lineHeight: 1, my: 0.5, letterSpacing: '-0.04em' }}>60%</Typography>
                  <Typography sx={{ fontSize: '1.1rem', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 500 }}>fewer tokens billed</Typography>
                </Box>
              </Box>

              {/* Bottom Row: Features */}
              <Box sx={{ 
                display: 'flex', gap: 2, overflowX: 'auto', pb: 2,
                '&::-webkit-scrollbar': { height: '12px' },
                '&::-webkit-scrollbar-track': { background: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', borderRadius: '10px' },
                '&::-webkit-scrollbar-thumb': { background: isDark ? 'rgba(255,255,255,0.2)' : '#CBD5E1', borderRadius: '10px', border: isDark ? '2px solid #0A0A0A' : '2px solid #FFFFFF', backgroundClip: 'padding-box' }
              }}>
                
                <Box sx={{ flex: 1, minWidth: 200, display: 'flex', gap: 2, p: 2.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', mb: 0.5 }}>Smart routing</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>Understands your request and uses the right model.</Typography>
                  </Box>
                </Box>

                <Box sx={{ flex: 1, minWidth: 200, display: 'flex', gap: 2, p: 2.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', mb: 0.5 }}>Context caching</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>Reuses relevant context to reduce token usage.</Typography>
                  </Box>
                </Box>

                <Box sx={{ flex: 1, minWidth: 200, display: 'flex', gap: 2, p: 2.5, backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h4v2H6v2H4V4zm16 0h-4v2h2v2h2V4zM4 20h4v-2H6v-2H4v4zm16 0h-4v-2h2v-2h2v4z"/><circle cx="12" cy="12" r="3"/></svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', mb: 0.5 }}>Prompt trimming</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>Removes unnecessary input before processing.</Typography>
                  </Box>
                </Box>

              </Box>
              
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    </Container>
  );
}
