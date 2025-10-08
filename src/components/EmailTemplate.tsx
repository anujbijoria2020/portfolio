import * as React from 'react';

export interface EmailTemplateProps {
  Email: string,
  Message: string
}
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Email,
  Message,
}) => (
  <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#1a202c', fontSize: '24px', borderBottom: '2px solid #3182ce', paddingBottom: '10px' }}>
      New Portfolio Message Received
    </h1>
    
    <p style={{ color: '#4a5568', fontSize: '16px' }}>
      Hi Anuj, you received a message from: 
      <b style={{ color: '#2b6cb0', marginLeft: '5px' }}>{Email}</b>
    </p>
    
    <hr style={{ borderColor: '#e2e8f0', margin: '20px 0' }} />
    
    <div style={{ padding: '15px', backgroundColor: '#f7fafc', borderRadius: '4px', borderLeft: '4px solid #3182ce' }}>
      <p style={{ color: '#2d3748', whiteSpace: 'pre-wrap', margin: 0, lineHeight: '1.6' }}>
        {Message}
      </p>
    </div>
    
    <p style={{ color: '#a0aec0', fontSize: '12px', marginTop: '20px', textAlign: 'center' }}>
      This message was successfully processed by your contact form API.
    </p>
  </div>
);
