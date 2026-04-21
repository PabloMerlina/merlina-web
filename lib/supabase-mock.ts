// Mock Supabase client para desarrollo local
// Reemplaza con credenciales reales en producción

interface MockDatabase {
  leads: Array<{
    id: number;
    name: string;
    email: string;
    company?: string;
    position?: string;
    message?: string;
    created_at: string;
  }>;
  email_subscribers: Array<{
    id: number;
    email: string;
    subscribed_at: string;
  }>;
}

const mockDb: MockDatabase = {
  leads: [
    {
      id: 1,
      name: "Demo Usuario",
      email: "demo@merlina.ai",
      company: "Demo Corp",
      position: "CEO",
      message: "Quiero probar Merlina",
      created_at: new Date().toISOString(),
    },
  ],
  email_subscribers: [],
};

export const createMockSupabaseClient = () => {
  return {
    from: (table: string) => ({
      insert: async (data: any[]) => {
        try {
          if (table === "leads") {
            const id = mockDb.leads.length + 1;
            const newLead = {
              id,
              ...data[0],
              created_at: new Date().toISOString(),
            };
            mockDb.leads.push(newLead);
            console.log("✅ Lead guardado (mock):", newLead);
            return { data: newLead, error: null };
          } else if (table === "email_subscribers") {
            const id = mockDb.email_subscribers.length + 1;
            const newSubscriber = {
              id,
              ...data[0],
              subscribed_at: new Date().toISOString(),
            };
            mockDb.email_subscribers.push(newSubscriber);
            console.log("✅ Subscriber guardado (mock):", newSubscriber);
            return { data: newSubscriber, error: null };
          }
          return { data: null, error: null };
        } catch (error: any) {
          return { data: null, error };
        }
      },
      select: async () => ({
        data: table === "leads" ? mockDb.leads : mockDb.email_subscribers,
        error: null,
      }),
    }),
  };
};
