def get_master_and_parts(source: str='recordings/recordings.txt') -> list:
    master = []
    parts = {}

    with open(source, 'r', encoding='utf-8') as f:
        state = 0
        name = ''

        for line in f.readlines():
            line = line.strip()

            if state == 0:
                if line:
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
