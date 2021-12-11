import { extend } from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import PostRepliesModal from "./components/PostRepliesModal";

app.initializers.add('datlechin/flarum-who-replied', () => {
  extend(CommentPost.prototype, 'footerItems', function (items) {
    const post = this.attrs.post;
    const replies = post.mentionedBy();

    if (replies && replies.length) {
      const users = [];
      const repliers = replies
        .sort((reply) => (reply.user() === app.session.user ? -1 : 0))
        .filter((reply) => {
          const user = reply.user();
          if (users.indexOf(user) === -1) {
            users.push(user);
            return true;
          }
        });

      const limit = app.forum.attribute('datlechin-who-replied.limit') || 5;

      const overLimit = repliers.length >= limit;

      if (overLimit) {
        items.add('whoReplied', (
          <a href="#" onclick={() => app.modal.show(PostRepliesModal, {users})}>
            <i className="fa fa-reply-all" /> {' '}
            {app.translator.trans('datlechin-who-replied.forum.button_label')}
          </a>
        ))
      }
    }
  });
});
