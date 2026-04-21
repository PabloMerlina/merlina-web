#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log('\n🚀 MERLINA Setup Automatizado\n');

  // Paso 1: Obtener credenciales
  console.log('📝 Pega aquí las credenciales de Supabase:');
  console.log('(Las obtuviste en: Supabase → Settings → API)\n');

  const supabaseUrl = await ask('1️⃣  SUPABASE_URL (ej: https://abc123.supabase.co): ');
  const supabaseAnonKey = await ask('2️⃣  SUPABASE_ANON_KEY (ej: eyJhbGc...): ');

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Credenciales incompletas');
    process.exit(1);
  }

  // Paso 2: Crear .env.local
  console.log('\n✍️  Creando .env.local...');
  const envContent = `NEXT_PUBLIC_SUPABASE_URL=${supabaseUrl}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${supabaseAnonKey}
`;

  fs.writeFileSync(path.join(__dirname, '.env.local'), envContent);
  console.log('✅ .env.local creado\n');

  // Paso 3: Test local
  console.log('🧪 Testando proyecto localmente...');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
    console.log('\n✅ Build exitoso\n');
  } catch (err) {
    console.error('❌ Error en build:', err.message);
    process.exit(1);
  }

  // Paso 4: Push a GitHub
  console.log('📤 Pusheando cambios a GitHub...');
  try {
    execSync('git add .env.local && git commit -m "Add Supabase credentials" && git push origin main', {
      stdio: 'inherit',
      cwd: __dirname,
    });
    console.log('✅ Push exitoso\n');
  } catch (err) {
    console.warn('⚠️  Error en git (puede ser que .env.local ya esté en .gitignore)', err.message);
  }

  // Paso 5: Instrucciones finales
  console.log('\n' + '='.repeat(60));
  console.log('🎉 CASI LISTO!\n');
  console.log('Próximos pasos:\n');
  console.log('1. Deploy en Vercel:');
  console.log('   👉 https://vercel.com/dashboard');
  console.log('   👉 Click "Add New" → "Project"');
  console.log('   👉 Selecciona "merlina-web"');
  console.log('   👉 Click "Deploy"\n');
  console.log('2. Agregar variables de entorno en Vercel:');
  console.log('   👉 Settings → Environment Variables');
  console.log('   👉 Agrega: NEXT_PUBLIC_SUPABASE_URL');
  console.log('   👉 Agrega: NEXT_PUBLIC_SUPABASE_ANON_KEY\n');
  console.log('3. Re-deploy:');
  console.log('   👉 Deployments → ⋮ → Redeploy\n');
  console.log('4. Verificar:');
  console.log('   👉 Tu sitio en: https://merlina-web.vercel.app\n');
  console.log('='.repeat(60) + '\n');

  rl.close();
}

main().catch(console.error);
