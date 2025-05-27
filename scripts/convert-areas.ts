import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'csv-parse/sync';

interface StudyArea {
  created_at: string;
  leader: string;
  name: string;
  year: string;
  months: string;
  otherName: string;
  province: string;
  region: string;
  presence: boolean;
  partners: string[];
  leaderEmail: string;
  photos: string;
}

const csvContent = readFileSync('data/areas.csv', 'utf8');

const records: StudyArea[] = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  cast: (value, context) => {
    if (context.column === 'presence') return value === 'Sí';
    if (context.column === 'partners')
      return value.split('\n').map(name => name.trim());

    return value;
  },
});

writeFileSync('data/areas.json', JSON.stringify(records, null, 2));
console.log('✅ JSON file created: data/areas.json');
