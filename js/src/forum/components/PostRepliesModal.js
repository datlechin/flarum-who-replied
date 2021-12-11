import Modal from 'flarum/common/components/Modal';
import Link from 'flarum/components/Link';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';

export default class PostRepliesModal extends Modal {
  className() {
    return 'Modal--small PostRepliesModal';
  }

  title() {
    return app.translator.trans('datlechin-who-replied.forum.post_replies.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <ul className="PostRepliesModal-list">
          {this.attrs.users.map(user => (
            <li>
              <Link href={app.route.user(user)}>
                {avatar(user)} {' '}
                {username(user)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
