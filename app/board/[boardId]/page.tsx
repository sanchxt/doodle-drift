import { Canvas } from "./_components/canvax";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
