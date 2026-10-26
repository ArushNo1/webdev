export async function sha256(text: string): Promise<string> {
  const textBuffer = new TextEncoder().encode(text);

  const hashedBuffer = await crypto.subtle.digest('SHA-256', textBuffer);
  const hashArray = Array.from(new Uint8Array(hashedBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}
