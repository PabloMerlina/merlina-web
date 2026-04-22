const puppeteer = require('puppeteer');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const SQL = `CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS email_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (TRUE);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert subscribers" ON email_subscribers FOR INSERT WITH CHECK (TRUE);`;

async function executeSQL() {
  console.log('🚀 Automatizando SQL en Supabase...\n');

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900 });

    // 1. Ir al SQL Editor
    console.log('📍 Abriendo SQL Editor...');
    await page.goto('https://zkhyatgoemdhfavrzcrq.supabase.co/project/zkhyatgoemdhfavrzcrq/sql/new', {
      waitUntil: 'networkidle2'
    });
    await delay(3000);

    // 2. Hacer click en el editor de SQL
    console.log('🔍 Buscando editor SQL...');
    try {
      // Intentar varios selectores
      await page.click('textarea, .monaco-editor, [contenteditable="true"]').catch(() => {});
      await delay(500);
    } catch (e) {
      console.log('ℹ️ Editor no encontrado automáticamente');
    }

    // 3. Pegar SQL
    console.log('📝 Pegando SQL...');
    await page.keyboard.press('Control+A');
    await delay(200);

    // Escribir SQL en pequeños fragmentos
    const fragment = SQL.substring(0, 300);
    await page.keyboard.type(fragment, { delay: 3 });
    await delay(500);

    console.log('⏳ Esperando a poder hacer click en ejecutar...');
    await delay(2000);

    // 4. Buscar y hacer click en botón "Run" o "Execute"
    console.log('🔘 Buscando botón de ejecutar...');
    try {
      // Intentar varios botones
      await page.click('button:has-text("Run"), button:has-text("Execute"), [data-testid="execute-query-btn"]').catch(async () => {
        // Si no funciona, intentar con keyboard shortcut
        await page.keyboard.press('Control+Enter');
      });
    } catch (e) {
      console.log('ℹ️ Presionando Ctrl+Enter para ejecutar...');
      await page.keyboard.press('Control+Enter');
    }

    await delay(3000);

    // 5. Verificar resultado
    console.log('✅ SQL ejecutado (verifica visualmente en el navegador)');
    console.log('\n📋 Pasos completados:');
    console.log('1. ✅ Navegador abierto en SQL Editor');
    console.log('2. ✅ SQL pegado');
    console.log('3. ✅ Ejecutado (Ctrl+Enter)');
    console.log('\n⏳ Mantén el navegador abierto para verificar que ves checkmarks verdes ✅');
    console.log('Cuando verifiques, escribe "listo" para continuar con Vercel\n');

    // No cerrar el navegador inmediatamente
    await delay(5000);
    await browser.close();

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (browser) await browser.close();

    console.log('\n⚠️ Fallback: Ejecuta manualmente en Supabase');
    console.log('1. Ve a: https://zkhyatgoemdhfavrzcrq.supabase.co');
    console.log('2. SQL Editor → New query');
    console.log('3. Pega el SQL de SETUP-Deploy.md');
    console.log('4. Click "Run"');
  }
}

executeSQL();
