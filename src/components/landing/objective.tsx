import { ProposalData } from '@/lib/proposal-data';

export default function Objective({ proposalData }: { proposalData: ProposalData }) {
  const objectiveBlock = proposalData.bloques.find((b) => b.id === 'objetivo');

  return (
    <div className="grid md:grid-cols-3 gap-10 mb-40 reveal">
      <div className="md:col-span-1">
        <h2 className="text-xs uppercase tracking-[0.4em] text-blue-600 font-bold mb-5">
          {objectiveBlock?.titulo || 'Visión del Proyecto'}
        </h2>
        <div className="h-1.5 w-16 bg-blue-600 rounded-full mb-6"></div>
        <p className="text-slate-400 text-sm font-medium">
          Digitalización con propósito médico.
        </p>
      </div>
      <div className="md:col-span-2 space-y-4">
        <div className="p-8 hyperglass rounded-[2rem] border-l-8 border-l-blue-600 shadow-xl">
          <ul className="space-y-6">
            {objectiveBlock?.contenido.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-blue-600 text-[10px]">{index + 1}</span>
                </div>
                <p
                  className="text-slate-700 text-xl font-light leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace(
                        /Crear una presencia digital/g,
                        '<span class="font-semibold">Crear una presencia digital</span>'
                      )
                      .replace(
                        /Implementar una automatización completa/g,
                        '<span class="font-semibold">Implementar una automatización completa</span>'
                      ),
                  }}
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
