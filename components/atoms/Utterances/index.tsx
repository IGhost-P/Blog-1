import { useUtterances } from 'hooks';

const commentNodeId = 'comments';

export function Utterances() {
  useUtterances({ commentNodeId });
  return <div id={commentNodeId} />;
}
