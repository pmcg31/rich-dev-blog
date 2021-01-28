#/bin/sh

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github_ed25519
git pull --rebase origin master
sudo yarn install
sudo yarn build
