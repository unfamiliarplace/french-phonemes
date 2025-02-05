def get_master_and_parts() -> list:
    master = []
    parts = {}

    with open('recordings/recordings.txt', 'r', encoding='utf-8') as f:
        state = 0
        name = ''

        for line in f.readlines():
            line = line.strip()

            if state == 0:
                name = line
                parts[name] = []
                state = 1
            
            elif state == 1:
                if line:
                    parts[name].append(line)
                else:
                    state = 0

    master = parts.pop('[ALL]')

    return master, parts