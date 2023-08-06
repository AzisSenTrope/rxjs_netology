import {fromEvent} from 'rxjs';

import {subscribeGit} from "./subscribeGit";

const documentForm = document.forms[0];

const observer = fromEvent(documentForm, 'submit')

observer.subscribe(subscribeGit);
